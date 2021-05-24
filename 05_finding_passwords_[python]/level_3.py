import subprocess

array = ["Linus", "docker", "if", "opéra", "468153084652"]

def test_password(password):
    print(password)
    subprocess.run(["unrar", "e", "tresor3.rar", "-p" + password])
    for element in array:
        if not element in password:
            test_password(password + element)

test_password("91Margaret")

test_password("91Grace")