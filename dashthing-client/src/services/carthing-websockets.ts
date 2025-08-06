import WebsocketMgr from "../utils/websocketMgr";

const globalSockets = {
    localConnection: new WebsocketMgr('ws://localhost:8890'),
    controlServerConnection: null,
}

export default globalSockets;