from fastapi import APIRouter, Depends
from pydantic import BaseModel
from typing import List
from datetime import date

from app.routes.auth import verify_token

router = APIRouter()

# In-memory bookings (temporary)
bookings_db = []

class Booking(BaseModel):
    room_id: int
    check_in: date
    check_out: date
    guests: int

# 🔒 CREATE BOOKING (LOGIN REQUIRED)
@router.post("/bookings")
def create_booking(
    booking: Booking,
    user: dict = Depends(verify_token)
):
    booking_id = len(bookings_db) + 1

    booking_data = {
        "id": booking_id,
        "user": user["sub"],   # email from JWT
        "room_id": booking.room_id,
        "check_in": booking.check_in,
        "check_out": booking.check_out,
        "guests": booking.guests
    }

    bookings_db.append(booking_data)

    return {
        "message": "Booking successful",
        "booking": booking_data
    }

# 🔒 GET BOOKINGS (LOGIN REQUIRED)
@router.get("/bookings")
def get_bookings(user: dict = Depends(verify_token)):
    return bookings_db
