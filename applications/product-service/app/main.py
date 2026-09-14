from fastapi import FastAPI

app = FastAPI(
    title="DevNexus Product Service",
    version="1.0.0"
)

@app.get("/products")
def get_products():
    return {
        "service": "Product Service",
        "message": "DevNexus Product Service is running!"
    }

@app.get("/products/health")
def health():
    return {
        "service": "Product Service",
        "status": "UP"
    }
