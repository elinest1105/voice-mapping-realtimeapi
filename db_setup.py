import os
import json
import psycopg2
from dotenv import load_dotenv
from datetime import datetime

# Load environment variables
load_dotenv()

# Database connection parameters from .env
DB_PARAMS = {
    "dbname": os.getenv("POSTGRES_DB"),
    "user": os.getenv("POSTGRES_USER"),
    "password": os.getenv("POSTGRES_PASSWORD"),
    "host": os.getenv("POSTGRES_HOST"),
    "port": os.getenv("POSTGRES_PORT")
}

# SQL to create the table
CREATE_TABLE_SQL = """
CREATE TABLE IF NOT EXISTS call_records (
    id SERIAL PRIMARY KEY,
    fx_record_id VARCHAR(50),
    call_id VARCHAR(50),
    contact_id VARCHAR(50),
    org_id VARCHAR(50),
    date_time TIMESTAMP,
    call_type VARCHAR(20),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(255),
    phone_number VARCHAR(20),
    total_costs DECIMAL(10,2),
    transport_model VARCHAR(50),
    analysis VARCHAR(20),
    ended_reason VARCHAR(50),
    transfer_destination VARCHAR(255),
    recording_path VARCHAR(255),
    transcript TEXT,
    agents_name VARCHAR(100),
    phone_number_id VARCHAR(50),
    street VARCHAR(255),
    city VARCHAR(100),
    country VARCHAR(100),
    coordinates VARCHAR(50),
    cp_type VARCHAR(20),
    status VARCHAR(20),
    offer_from VARCHAR(100),
    call_duration VARCHAR(20),
    scoring INTEGER,
    reasons TEXT,
    follow_up VARCHAR(5),
    scheduled_appointment_with VARCHAR(100),
    successful_appointment VARCHAR(5)
);
"""

def connect_db():
    """Create a database connection"""
    try:
        conn = psycopg2.connect(**DB_PARAMS)
        print("Database connection successful")
        return conn
    except Exception as e:
        print(f"Error connecting to database: {e}")
        raise

def create_table(conn):
    """Create the call_records table"""
    try:
        with conn.cursor() as cur:
            cur.execute(CREATE_TABLE_SQL)
            conn.commit()
            print("Table created successfully")
    except Exception as e:
        print(f"Error creating table: {e}")
        conn.rollback()
        raise

def insert_mockup_data(conn, data):
    """Insert mockup data into the database"""
    insert_sql = """
    INSERT INTO call_records (
        fx_record_id, call_id, contact_id, org_id, date_time, call_type,
        first_name, last_name, email, phone_number, total_costs,
        transport_model, analysis, ended_reason, transfer_destination,
        recording_path, transcript, agents_name, phone_number_id,
        street, city, country, coordinates, cp_type, status,
        offer_from, call_duration, scoring, reasons, follow_up,
        scheduled_appointment_with, successful_appointment
    ) VALUES (
        %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s,
        %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s,
        %s, %s
    )
    """
    
    try:
        with conn.cursor() as cur:
            for record in data:
                values = (
                    record["FX Record ID"],
                    record["Call ID"],
                    record["Contact ID"],
                    record["Org_ID"],
                    datetime.fromisoformat(record["Date and Time"].replace('Z', '+00:00')),
                    record["Call Type"],
                    record["First Name"],
                    record["Last Name"],
                    record["Email"],
                    record["Phone Number"],
                    float(record["Total Costs"]),
                    record["Transport Model Voice VAPI Retell"],
                    record["Analysis"],
                    record["Ended Reason"],
                    record["Transfer Destination"],
                    record["Recording"],
                    record["Transcript"],
                    record["Agents Name"],
                    record["Phone Number ID"],
                    record["Street"],
                    record["City"],
                    record["Country"],
                    record["Coordinates"],
                    record["CP_Type"],
                    record["Status"],
                    record["Offer From"],
                    record["Call Duration"],
                    record["Scoring"],
                    record["Reasons"],
                    record["Follow Up"],
                    record["Scheduled Appointment with"],
                    record["Successful Appointment Scheduling"]
                )
                cur.execute(insert_sql, values)
            
            conn.commit()
            print(f"Successfully inserted {len(data)} records")
    except Exception as e:
        print(f"Error inserting data: {e}")
        conn.rollback()
        raise

def main():
    """Main function to set up database and insert data"""
    # Read mockup data file mockupData.js
    with open('static/mockupData.js', 'r') as f:
        content = f.read()
        # Extract the mockup data array
        start = content.find('const mockupData = [')
        end = content.find('];', start) + 1
        mockup_data_str = content[start:end].replace('const mockupData = ', '')
        # Remove any trailing commas
        mockup_data_str = mockup_data_str.replace(',\n]', '\n]')
        mockup_data_str = mockup_data_str.replace(',\r]', '\r]')
        # Load JSON data
        try:
            mockup_data = json.loads(mockup_data_str)
        except json.JSONDecodeError as e:
            print(f"Failed to parse mockup data: {e}")
            return
        
    # Connect to database and perform operations
    conn = connect_db()
    try:
        create_table(conn)
        insert_mockup_data(conn, mockup_data)
        print("Database setup completed successfully")
    finally:
        conn.close()

if __name__ == "__main__":
    main()