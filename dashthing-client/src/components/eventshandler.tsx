import { useEffect } from "preact/hooks";
import CarThingEvents from "../utils/carthingevents";

enum CarthingKey{
    PRESET_1,
    PRESET_2,
    PRESET_3,
    PRESET_4,
    MENU,
    SCROLLBUTTON,
    ENTER,
    UNK
}

function ConvertKey(keyName : string) : CarthingKey{
    switch(keyName){
        case '1':
            return CarthingKey.PRESET_1;
        case '2':
            return CarthingKey.PRESET_2;
        case '3':
            return CarthingKey.PRESET_3;
        case '4':
            return CarthingKey.PRESET_4;
        case 'm':
            return CarthingKey.MENU;
        case 'Enter':
            return CarthingKey.SCROLLBUTTON;
        case 'Escape':
            return CarthingKey.ENTER;
        default:
            return CarthingKey.UNK;
    }
}

function EventsHandler(){
	useEffect(() => {
		function handleKeyDown(e) {
            CarThingEvents.dispatchCarThingButtonDown(ConvertKey(e.key));
		}
        function handleKeyUp(e) {
            CarThingEvents.dispatchCarThingButtonUp(ConvertKey(e.key));
		}
        function handleScroll(e) {
            CarThingEvents.dispatchCarThingScroll(e.deltaX);
        }
	
		document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        document.addEventListener('wheel', handleScroll);
	
		// Don't forget to clean up
		return function cleanup() {
		    document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
            document.removeEventListener('wheel', handleScroll);
		}
	  }, []);

    return <></>
}

export default EventsHandler;