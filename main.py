from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import os
import httpx
from termcolor import colored

# Constants
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
MODEL = "gpt-4o-realtime-preview-2024-12-17"

# Initialize FastAPI
app = FastAPI(title="Voice Map Explorer")

# Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="static")

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
            raise ValueError("OpenAI API key not found")
            
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
                raise ValueError("Failed to create OpenAI session")
                
            print(colored("Session created successfully!", "green"))
            return response.json()
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
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)