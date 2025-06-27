import pandas as pd
from tkinter import Tk, filedialog

# Seleccionar archivo Excel
Tk().withdraw()
archivo_excel = filedialog.askopenfilename(title="Selecciona tu archivo Excel", filetypes=[("Excel files", "*.xlsx")])

if not archivo_excel:
    print("No se seleccionó ningún archivo.")
    exit()

# Leer Excel
df = pd.read_excel(archivo_excel)

# Plantilla HTML
html_inicio = '''
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cuadro de Marcas</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        h1 { text-align: center; }
        table { width: 100%; border-collapse: collapse; margin-top: 1em; }
        th, td { padding: 8px 12px; border: 1px solid #aaa; text-align: left; }
        th { background-color: #f2f2f2; }
        @media screen and (max-width: 600px) {
            table, thead, tbody, th, td, tr { font-size: 12px; }
        }
    </style>
</head>
<body>
    <h1>Cuadro de Marcas</h1>
    <table>
        <thead>
            <tr>
                <th>Marca</th>
                <th>Temporada</th>
                <th>Proveedor</th>
                <th>Last Update</th>
            </tr>
        </thead>
        <tbody>
'''

html_filas = ''
for _, fila in df.iterrows():
    html_filas += f"<tr><td>{fila['Marca']}</td><td>{fila['Temporada']}</td><td>{fila['Proveedor']}</td><td>{fila['Last Update']}</td></tr>\n"

html_final = '''
        </tbody>
    </table>
</body>
</html>
'''

# Guardar archivo HTML
with open("index.html", "w", encoding="utf-8") as f:
    f.write(html_inicio + html_filas + html_final)

print("✅ HTML generado como 'index.html'. Podés abrirlo o subirlo donde quieras.")
