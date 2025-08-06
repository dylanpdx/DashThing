import { useEffect, useState } from "preact/hooks";
import globalSockets from "../services/carthing-websockets";
import LoadingLabel from "./loadinglabel";

function LoadingScreen() {
    const [localConnectionOpen, setLocalConnectionOpen] = useState(false);
    const [controlServerConnectionOpen, setControlServerConnectionOpen] = useState(false);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (globalSockets.localConnection.isConnected() != localConnectionOpen)
                setLocalConnectionOpen(globalSockets.localConnection.isConnected());
        }, 1000);

        const ready = globalSockets.localConnection.isConnected()// && globalSockets.controlServerConnection.isConnected();
        if (ready && !isReady) {
            setIsReady(true);
        }

        return () => clearInterval(interval);
    },[]);

    return (
        <div class={isReady?"loadingscreen centerhv fulldiv hidden":"loadingscreen centerhv fulldiv"}>
			<h1>Waiting for connections...</h1>
			<div class="loadingSection">
				<LoadingLabel done={localConnectionOpen} text='Local Car Thing Connection' />
				<LoadingLabel done={controlServerConnectionOpen} text='Control Server Connection' />
			</div>
		</div>
    );
};

export default LoadingScreen;