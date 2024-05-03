from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()
url = "http://localhost:8080"
driver.get(url)
time.sleep(2)


def test_registro():
    #menu-Registro Actividad
    btn_registrar = driver.find_element(By.XPATH,'//*[@id="root"]/div/div[1]/div/ul/li[2]/a')
    btn_registrar.click()
    time.sleep(2)
    #usuario
    variable_usuario = driver.find_element(By.XPATH,'//*[@id="root"]/div/div[2]/div/form/input[1]')
    variable_usuario.send_keys("Pablo")
    time.sleep(1)
    #actividad    
    variables_actividad = driver.find_element(By.XPATH,'//*[@id="root"]/div/div[2]/div/form/input[2]')
    variables_actividad.send_keys("DB")
    time.sleep(1)
    #fecha
    variables_fecha = driver.find_element(By.XPATH,'//*[@id="root"]/div/div[2]/div/form/input[3]')
    variables_fecha.send_keys("11/03/1995")
    time.sleep(1)
    #hora I
    variables_horai = driver.find_element(By.XPATH,'//*[@id="root"]/div/div[2]/div/form/input[4]')
    variables_horai.send_keys("2")
    time.sleep(1)
    #hora F
    variables_horaf = driver.find_element(By.XPATH,'//*[@id="root"]/div/div[2]/div/form/input[5]')
    variables_horaf.send_keys("3")
    time.sleep(1)

    btn_registrar_data = driver.find_element(By.XPATH,'//*[@id="root"]/div/div[2]/div/form/button')
    btn_registrar_data.click()
    time.sleep(2)

def test_consultar():
    btn_consultar = driver.find_element(By.XPATH,'//*[@id="root"]/div/div[1]/div/ul/li[3]/a')
    btn_consultar.click()
    time.sleep(2)

    btn_consulta_data = driver.find_element(By.XPATH,'//*[@id="2"]')
    btn_consulta_data.click()
    time.sleep(3)