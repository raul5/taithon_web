import subprocess
import os
import sys

GIT_PATH = r"C:\Users\soprano\AppData\Local\Programs\Git\bin\git.exe"

def run_command(command):
    # Reemplazar 'git' por GIT_PATH si es el primer elemento del comando
    if command[0] == "git":
        command[0] = GIT_PATH
    
    print(f"Ejecutando comando: {' '.join(command)}")
    try:
        process = subprocess.Popen(
            command,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            shell=True
        )
        
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

def init_git():
    print("Inicializando Git localmente...")
    
    # 1. git init
    if not os.path.exists(".git"):
        run_command(["git", "init"])
        run_command(["git", "branch", "-M", "main"])
    
    # 2. .gitignore
    gitignore_content = """node_modules
.vercel
.env
.DS_Store
dist
.tmp/
"""
    with open(".gitignore", "w") as f:
        f.write(gitignore_content)
    
    # 3. git add e initial commit
    run_command(["git", "add", "."])
    # Verificamos si hay archivos para commitear
    status_code = run_command(["git", "status", "--porcelain"])
    
    # Si hay cambios, commiteamos
    run_command(["git", "commit", "-m", "Initial commit: Taithon Professional Landing"])
    
    print("Git inicializado y commit inicial realizado.")

if __name__ == "__main__":
    init_git()
