from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from dotenv import load_dotenv
import os
import httpx
from termcolor import colored
import psycopg2

# Load the .env file
load_dotenv()

# Constants
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
print(OPENAI_API_KEY)
MODEL = "gpt-4o-realtime-preview-2024-12-17"
DB_PARAMS = {
    "dbname": os.getenv("POSTGRES_DB"),
    "user": os.getenv("POSTGRES_USER"),
    "password": os.getenv("POSTGRES_PASSWORD"),
    "host": os.getenv("POSTGRES_HOST"),
    "port": os.getenv("POSTGRES_PORT")
}

# Initialize FastAPI
app = FastAPI(title="Voice Map Explorer")

# Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="static")

# Add this function after the database connection setup
def get_call_records():
    """Fetch all call records from the database"""
    try:
        connection = psycopg2.connect(**DB_PARAMS)

        with connection.cursor() as cur:
            cur.execute("""
                SELECT * FROM call_records
                ORDER BY date_time DESC
            """)
            columns = [desc[0] for desc in cur.description]
            call_records = cur.fetchall()
            # Convert to list of dictionaries
            result = []
            for record in call_records:
                record_dict = dict(zip(columns, record))
                # Convert datetime to string format
                record_dict['date_time'] = record_dict['date_time'].isoformat()
                # Convert decimal to float for JSON serialization
                record_dict['total_costs'] = float(record_dict['total_costs'])
                result.append(record_dict)
                
            return result
    except Exception as e:
        print(colored(f"Error fetching call records: {str(e)}", "red"))
        return []

# Add a new endpoint to get call records
@app.get("/api/call-records")
async def read_call_records():
    try:
        records = get_call_records()
        return JSONResponse(content={"success": True, "data": records})
    except Exception as e:
        print(colored(f"Error serving call records: {str(e)}", "red"))
        return JSONResponse(
            status_code=500,
            content={"success": False, "error": "Failed to fetch call records"}
        )

@app.get("/")
async def read_root(request: Request):
    try:
        print(colored("Serving index page...", "green"))
        return templates.TemplateResponse("index.html", {"request": request})
    except Exception as e:
        print(colored(f"Error serving index page: {str(e)}", "red"))
        return JSONResponse(
            status_code=500,
            content={"error": "Internal server error"}
        )

@app.get("/session")
async def create_session():
    try:
        print(colored("Creating new session...", "cyan"))
        if not OPENAI_API_KEY:
            print(colored("Error: OpenAI API key not found", "red"))
            raise HTTPException(status_code=500, detail="OpenAI API key not found")

        print(colored(f"Using API Key: {OPENAI_API_KEY[:4]}... (truncated for security)", "yellow"))  # Log part of the key for debugging
            
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://api.openai.com/v1/realtime/sessions",
                headers={
                    "Authorization": f"Bearer {OPENAI_API_KEY}",
                    "Content-Type": "application/json"
                },
                json={
                    "model": MODEL,
                    "voice": "verse"
                }
            )
            
            if response.status_code != 200:
                raise HTTPException(status_code=response.status_code, detail="Failed to create OpenAI session")
                
            print(colored("Session created successfully!", "green"))
            return response.json()
    except HTTPException as he:
        print(colored(f"HTTP Error creating session: {str(he.detail)}", "red"))
        raise he
    except Exception as e:
        print(colored(f"Error creating session: {str(e)}", "red"))
        return JSONResponse(
            status_code=500,
            content={"error": "Failed to create session"}
        )
    
@app.get("/favicon.ico")
async def get_favicon():
    return StaticFiles(directory="static").get_response("favicon.ico")

if __name__ == "__main__":
    import uvicorn
    print(colored("Starting server...", "yellow"))
    uvicorn.run("main:app", host="127.0.0.1", port=7000, reload=True)