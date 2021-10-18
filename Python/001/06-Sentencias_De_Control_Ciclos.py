condicion = False

# IF
if condicion == True:
    print('Condición verdadera')
elif condicion == False:
    print('Condición falsa')
else:
    print('Condición no reconocida')

# OPERADOR TERNARIO
print('Condición verdadera') if condicion else print('Condición falsa')

# WHILE
contador = 0
while contador < 3:
    print(contador)
    contador += 1 #contador = contador + 1
else:
    print('Fin ciclo while')

# FOR
cadena = 'Hola'

for letra in cadena:
    print(letra)
else:
    print('Fin ciclo for')

# FOR IN RANGE
for x in range (0,10):
    print(x)
else:
    print("Fin ciclo for in ragne")


""" 
    BREAKE: Detiene un ciclo o sentencia
    CONTINUE: Ignora condicion y continua con ciclo o sentencia
"""