#Etape 1 : parsing

def create_list_of_elements(elements):
    return elements.split(" ")
array_of_elements = create_list_of_elements("4 + 6.5 * 8")


#Etape 2 : qualification des elements 

def qualify_type_of_elements(array_of_strings):

    for i in range(len(array_of_strings)):
        if(array_of_strings[i].isdigit()):
            array_of_strings[i] = int(array_of_strings[i])
        elif("." in array_of_strings[i]):
             array_of_strings[i] =float(array_of_strings[i])
        print(type(array_of_strings[i]))

    return(array_of_strings)

print(qualify_type_of_elements(array_of_elements))


#Etape 3 : Opérations de base

def add(first_number, second_number):
    return first_number + second_number

print(add(5, 0))

def minus(first_number, second_number):
    return first_number - second_number

print(minus(3, 9))

def multiply(first_number, second_number):
    return first_number * second_number

print(multiply(2, 0))

def true_divide(first_number, second_number):
    return first_number / second_number

print(true_divide(1, 2))


# Étapes 4 - Calcul de l'expression (approche)

mathematical_expression = create_list_of_elements("98 - 6 * 8 * 1.5 + 4 - 1 / 5")
print(qualify_type_of_elements(mathematical_expression))

def calculate_expression(proritary_operations):
    expression_after_prioritaty_operators_calculus = []
    i = 0

    while i < len(proritary_operations):
        if (proritary_operations[i] != "*" and 
            proritary_operations[i] != "/"):
            secondary_operations.append(proritary_operations[i]) 
        elif (proritary_operations[i] == "*"):
            secondary_operations.append(multiply(secondary_operations[-1], 
            proritary_operations[i+1]))
            del secondary_operations[-2]
            i+=1
        elif (proritary_operations[i] == "/"):
            secondary_operations.append(true_divide(secondary_operations[-1], 
            proritary_operations[i+1]))
            del secondary_operations[-2]
            i+=1
        i+=1
    i=0

    result = secondary_operations[0]

    while i < len(secondary_operations): 
        if (secondary_operations[i] == "-"):
            result = minus(result,secondary_operations[i+1])
        elif (secondary_operations[i] == "+"):
            result = add(result,secondary_operations[i+1])
        print(result)
        print(i)
        print(secondary_operations)
        print("-")
        i+=1
    print(result)
    return result

calculate_expression(mathematical_expression) 