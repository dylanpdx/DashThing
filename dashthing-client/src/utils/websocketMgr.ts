class WebsocketMgr {
    websocket: WebSocket;
    url: string;
    reconnectInterval: number;
    maxRetries: number;
    retries: number;

    constructor(url: string, reconnectInterval = 5000, maxRetries = 10) {
        this.url = url;
        this.reconnectInterval = reconnectInterval;
        this.maxRetries = maxRetries;
        this.retries = 0;
        this.connect();
    }

    connect() {
        this.websocket = new WebSocket(this.url);

        this.websocket.onopen = () => {
            console.log('WebSocket connected');
            this.retries = 0; // Reset retries on successful connection
        };

        this.websocket.onclose = () => {
            console.log('WebSocket disconnected');
            this.reconnect();
        };

        this.websocket.onerror = (error) => {
            console.error('WebSocket error:', error);
            this.close();
        };
    }

    reconnect() {
        if (this.retries < this.maxRetries) {
            setTimeout(() => {
                console.log(`Reconnecting... (${this.retries + 1}/${this.maxRetries})`);
                this.retries++;
                this.connect();
            }, this.reconnectInterval);
        } else {
            console.error('Max retries reached. Could not reconnect.');
        }
    }

    send(data: string) {
        if (this.isConnected()) {
            this.websocket.send(data);
        } else {
            console.error('WebSocket is not connected. Cannot send data.');
        }
    }

    close() {
        this.websocket.close();
    }

    isConnected() {
        return this.websocket.readyState === WebSocket.OPEN;
    }

    getSocket() {
        return this.websocket;
    }
}

export default WebsocketMgr;