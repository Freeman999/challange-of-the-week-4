def on_button_pressed_a():
    global Spielzeit, DruckenB
    Spielzeit = input.running_time()
    DruckenB = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def Neustart():
    global Zeit, DruckenB, Runde, Spielrunden
    Zeit = input.running_time()
    DruckenB = 0
    Runde = 0
    Spielrunden = []

def on_button_pressed_b():
    Spielrunde()
input.on_button_pressed(Button.B, on_button_pressed_b)

def Spielrunde():
    global DruckenB, Endespielzeit, Runde
    DruckenB += 1
    if DruckenB == 10:
        Endespielzeit = input.running_time()
        basic.show_number(Endespielzeit - Spielzeit)
        Spielrunden.append(Endespielzeit - Spielzeit)
        DruckenB = 0
        Runde += 1
        basic.pause(1000)
    if Runde == 5:
        basic.show_number((Spielrunden[0] + Spielrunden[1] + (Spielrunden[2] + (Spielrunden[3] + Spielrunden[4]))) / 5)
        basic.pause(1000)
        basic.show_number(min(min(min(min(Spielrunden[0], Spielrunden[1]), Spielrunden[2]),
                    Spielrunden[3]),
                Spielrunden[4]))
        basic.pause(1000)
        basic.show_icon(IconNames.HEART)
        basic.pause(400)
        basic.clear_screen()
        Neustart()
Endespielzeit = 0
Spielrunden: List[number] = []
Runde = 0
Zeit = 0
DruckenB = 0
Spielzeit = 0
Neustart()