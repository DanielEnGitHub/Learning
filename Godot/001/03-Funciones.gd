extends Node2D

func _ready():
    saludar("Daniel")
    print("La suma es: " , sumar(10,15))

""" 
    _funcion(): Funciones privadas
    funcion(): Funciones publicas
"""
# Funciones simples
func saludar(name): # valor por defecto: (name = "Mundo")
    print("Hola ", name)

# Funciones con valores retornables
func sumar(a, b):
    return(a + b)