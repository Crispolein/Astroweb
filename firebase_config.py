import firebase_admin
from firebase_admin import credentials, auth

# Ruta al archivo de claves de servicio descargado desde Firebase
cred = credentials.Certificate("astronexo-63c6450367bb.json")

# Inicializar la app de Firebase
firebase_admin.initialize_app(cred)
