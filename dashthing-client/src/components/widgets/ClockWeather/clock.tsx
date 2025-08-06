import { useTime } from "../../../utils/useTime";

function Clock(){
    const date = new Date();
    const showTime = useTime(1000);


    return (
        <div class="clock">
            <p>{showTime}</p>
        </div>
    )
}

export default Clock;