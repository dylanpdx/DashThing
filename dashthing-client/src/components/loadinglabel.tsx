interface LoadingLabelProps {
    done: boolean;
    text: string;
}

function LoadingLabel(props : LoadingLabelProps) {
    return (
        <div class="loadinglabel">
            {props.done ? (
                <span class="loadingtext">✅ {props.text}</span>
            ) : (
                <div><span class="loader"></span><span class="loadingtext">&nbsp;{props.text}</span></div>
            )}
        </div>
    );
};

export default LoadingLabel;