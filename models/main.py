from io import BytesIO
import numpy as np
from PIL import Image
from fastapi import FastAPI, UploadFile, File
import tensorflow as tf
import cv2 as cv
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:19006"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

MODEL = tf.keras.models.load_model("model2.keras")
CLASS_NAMES = ['Acne', 'Dry', 'Normal','Oily']

@app.get("/ping")
async def ping():
    return "Server is running..."

@app.post("/predict")
async def skin_level(file: UploadFile = File(...)):
    image = image_preprocessing(await file.read())
    print('Image received')


    prediction = MODEL.predict(np.expand_dims(image, axis=0))
    confidence = round(100 * (np.max(prediction[0])), 2)

    class_index = np.argmax(prediction)
    skin_type = CLASS_NAMES[class_index]

    return {
        'Skin Type': skin_type,
        'Confidence': confidence
    }


def image_preprocessing(image):
    img_bytes = BytesIO(image)
    img = Image.open(img_bytes)
    img = np.array(img)

    resized = cv.resize(img, (224, 224))
    return resized

if __name__ == "__main__":
    uvicorn.run(app, host=" 192.168.8.1", port=8000)