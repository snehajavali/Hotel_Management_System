from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.rooms import router as rooms_router
from app.routes.bookings import router as bookings_router
from app.routes.auth import router as auth_router

app = FastAPI(title="Hotel Management System API")

# CORS configuration (React frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(rooms_router, prefix="/api", tags=["Rooms"])
app.include_router(bookings_router, prefix="/api", tags=["Bookings"])
app.include_router(auth_router, prefix="/api", tags=["Authentication"])

# Root endpoint
@app.get("/")
def root():
    return {"message": "Backend is running"}
