"""
    Comentarios
    de
    mas
    de
    1
    linea
"""

# Comentario de una sola linea

var a = 10
var b = 10.25
var c = "Hola mundo"

print(a)
print(a+b)

# Arrays
var x = [1, false, 3.1416, "Hola"]

for f in x:
    print(f)

# Diccionarios
var equipos = { 
    "FC Barcelona": "Equipo de futbol de España",
    "Chelsea": "Equipo de futbol de Inglaterra",
    "Antigua GFC": "Equipo de futbol de Guatemala",
    "Italia": ["Juventus", "Inter de milan", "Roma", "Lazzio"]
    }

for q in equipos.keys(): # Keys(): Acceder sus llaves. Values(): Acceder a su contenido
    if q == "Italia":
        for a in equipos[q]:
            print(a)
    else:
        print(equipos[q])