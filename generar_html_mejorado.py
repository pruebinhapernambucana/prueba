import pandas as pd
import os
from tkinter import Tk, filedialog
import requests
from urllib.parse import quote

# Selección del archivo Excel
Tk().withdraw()
archivo_excel = filedialog.askopenfilename(title="Selecciona el archivo Excel", filetypes=[("Excel files", "*.xlsx")])
if not archivo_excel:
    print("No se seleccionó ningún archivo.")
    exit()

# Leer archivo
df = pd.read_excel(archivo_excel)

# Crear carpeta para logos descargados
carpeta_logos = "logos"
os.makedirs(carpeta_logos, exist_ok=True)

# Función (simulada) para descargar logos
def descargar_logo_simulado(marca):
    # Este código simula la descarga: en una implementación real se puede usar Bing API, etc.
    nombre_archivo = f"{marca.lower().replace(' ', '_')}.png"
    ruta = os.path.join(carpeta_logos, nombre_archivo)
    if not os.path.exists(ruta):
        # Simula logo como un cuadrado vacío (en implementación real se descargará imagen)
        with open(ruta, "wb") as f:
            f.write(b"")  # Vacío por ahora
    return nombre_archivo

# Crear HTML
html = """<!DOCTYPE html>
<html lang='es'>
<head>
    <meta charset='UTF-8'>
    <title>Cuadro de Marcas</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; background: #f0f4f8; }
        header { background: #1e90ff; padding: 20px; display: flex; align-items: center; color: white; }
        header img { height: 50px; margin-right: 15px; }
        h1 { margin: 0; font-size: 24px; }
        .contenedor { display: flex; flex-wrap: wrap; padding: 20px; gap: 20px; justify-content: center; }
        .card {
            background: white;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            width: 250px;
            padding: 15px;
            text-align: center;
        }
        .card img { max-width: 100px; height: auto; margin-bottom: 10px; }
        .card h2 { font-size: 18px; margin: 10px 0 5px; }
        .card p { margin: 4px 0; color: #555; }
    </style>
</head>
<body>
<header>
    <img src='logo_comex.png' alt='COMEX SPORT Logo'>
    <h1>Cuadro de Marcas</h1>
</header>
<div class='contenedor'>
"""

# Agregar tarjetas
for _, row in df.iterrows():
    marca = str(row['Marca'])
    temporada = str(row['Temporada'])
    proveedor = str(row['Proveedor'])
    last_update = str(row['Last Update'])

    nombre_logo = descargar_logo_simulado(marca)
    ruta_logo_web = os.path.join("logos", nombre_logo)

    html += f"""
    <div class='card'>
        <img src='{ruta_logo_web}' alt='{marca}'>
        <h2>{marca}</h2>
        <p><strong>Temporada:</strong> {temporada}</p>
        <p><strong>Proveedor:</strong> {proveedor}</p>
        <p><strong>Última Actualización:</strong> {last_update}</p>
    </div>
    """

html += """
</div>
</body>
</html>
"""

# Guardar HTML
with open("cuadro_marcas.html", "w", encoding="utf-8") as f:
    f.write(html)

print("HTML generado exitosamente.")
