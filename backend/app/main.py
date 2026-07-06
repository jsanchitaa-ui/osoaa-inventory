from fastapi import FastAPI

from app.api.products import router as product_router
from app.db.base import Base
from app.db.database import engine

# Import models so SQLAlchemy creates the tables
from app.models.product import Product

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="OSOAA Inventory API",
    description="Inventory Management System for OSOAA",
    version="1.0.0",
)

app.include_router(product_router)


@app.get("/")
def home():
    return {
        "application": "OSOAA Inventory",
        "status": "Running",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
    }