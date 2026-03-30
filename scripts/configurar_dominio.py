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

def configure_domain():
    print("Iniciando solicitud de vinculación del dominio taithon.com...")
    
    # Añadir dominio al proyecto actual
    command = ["npx", "vercel", "domains", "add", "taithon.com"]
    
    return_code = run_command(command)
    
    if return_code == 0:
        print("Dominio añadido correctamente. Por favor, revisa la salida para los registros DNS needed.")
    else:
        print(f"Falla al añadir el dominio. Código de salida: {return_code}")
        sys.exit(return_code)

if __name__ == "__main__":
    configure_domain()
