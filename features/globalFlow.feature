Feature: Realizar interaccion en ChatBot
  Como Consultor@ Digital
  Yo quiero interactuar con el ChatBot para obtener las opciones disponibles

@MapearFlow
Scenario Outline: Navegacion Mapa de Opciones
    Given Ingreso a Facebook Messenger utilizando mi usuario "<Usuario>" y mi clave "<Password>"
    When Navego a traves del flujo "<TipoFlujo>" en la categoria "<Categoria>"
    Then Confirmo el mapeo completo de opciones del Bot

Examples:
| Usuario                   | Password  | TipoFlujo | Categoria |
| tonoavila8@gmail.com      | qa_user   | OPCIONES  |           |

# @MapearFlow @FlujoDetallado
# Scenario Outline: Navegacion de consultas y respuestas detallado
#     Given Ingreso a Facebook Messenger utilizando mi usuario "<Usuario>" y mi clave "<Password>"
#     When Navego a traves del flujo detallado de respuestas
#     Then Confirmo el mapeo completo de opciones del Bot

# Examples:
# | Usuario                   | Password  |
# | tonoavila8@gmail.com      | qa_user   |