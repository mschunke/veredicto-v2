# Veredicto Cloud Function

A simple Google Cloud Run function that accepts POST requests with a name payload and returns a success response.

## API Endpoints

### Health Check
- **GET** `/`
- Returns health status of the function

### Hello World
- **POST** `/hello`
- **Body**: `{ "name": "John Smith" }`
- **Response**: `{ "success": true, "name": "John Smith" }`

## Local Development

1. Navigate to the functions directory:
   ```bash
   cd functions
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Test the function:
   ```bash
   # Health check
   curl http://localhost:8080/
   
   # Hello endpoint
   curl -X POST http://localhost:8080/hello \
     -H "Content-Type: application/json" \
     -d '{"name": "John Smith"}'
   ```

## Deployment to Google Cloud Run

1. Make sure you have the Google Cloud CLI installed and authenticated:
   ```bash
   gcloud auth login
   gcloud config set project YOUR_PROJECT_ID
   ```

2. Deploy the function:
   ```bash
   npm run deploy
   ```

   Or manually:
   ```bash
   gcloud run deploy veredicto-function \
     --source . \
     --region=us-central1 \
     --allow-unauthenticated
   ```

## Environment Variables

The function uses the following environment variables:
- `PORT`: Port to run the server on (default: 8080)

## Dependencies

- **express**: Web framework for Node.js
- **Node.js**: Version 18 or higher required
