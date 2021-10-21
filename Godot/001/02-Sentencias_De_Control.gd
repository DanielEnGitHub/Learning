# IF
var edad = 20

if edad >= 0 and edad < 18:
    print("Eres un chaval")
elif edad >=18 and edad < 35:
    print("Ya eres un joven adulto")
elif edad >=35 and edad < 50:
    print("Eres un adulto casi mayor")
elif edad >=50 and edad < 75:
    print("Eres un adulto mayor")
elif edad >=75:
    print("Eres un anciano")
else:
    print("Aun no has nacido :p")

# Operador ternario
"""
    (valor verdadero) if (cond) else (valor falso)
"""
    # print("Eres mayor de edad") if (edad >= 18) else print("Eres menor de edad")
    print("Eres mayor de edad" if (edad >= 18) else "Eres menor de edad")

# MATCH (SWITCH)
var mes = 5

match mes:
    3, 4, 5, 6:
        print("Estamos en primavera")
    7, 8, 9:
        print("Estamos en verano")
    10,11,12:
        print("Estamos en otoño")
    1,2:
        print("Estamos en invierno")
    _:
        print("Opcion no valida")
    
# FOR
for i in range(0,10,2):
    print(i)

var g = [7,8]

for h in g:
    for k in range(0,10):
        print( h, "*",k,"=",(h*k) )
    print("-----------------------------")


# While
var x = 0

while x < 10:
    print(x)
    x += 1