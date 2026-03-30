import subprocess
import os
import sys

def run_command(command):
    print(f"Ejecutando comando: {' '.join(command)}")
    try:
        process = subprocess.Popen(
            command,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            shell=True
        )
        
        # Leemos la salida en tiempo real
        while True:
            output = process.stdout.readline()
            if output == '' and process.poll() is not None:
                break
            if output:
                print(output.strip())
        
        err = process.stderr.read()
        if err:
            print(f"Errores: {err}")
            
        return process.returncode
    except Exception as e:
        print(f"Error al ejecutar el comando: {e}")
        return 1

def deploy():
    # Cambiar al directorio raíz del proyecto si es necesario
    # Pero asumimos que se ejecuta desde la raíz
    
    print("Iniciando despliegue en Vercel...")
    
    # Intentamos primero un despliegue de preview con --yes para evitar interactividad
    # Añadimos --name en minúsculas para cumplir con las políticas de Vercel
    command = ["npx", "vercel", "--yes", "--name", "taithon-landing"]
    
    return_code = run_command(command)
    
    if return_code == 0:
        print("Despliegue completado con éxito.")
    else:
        print(f"Falla en el despliegue. Código de salida: {return_code}")
        sys.exit(return_code)

if __name__ == "__main__":
    deploy()
