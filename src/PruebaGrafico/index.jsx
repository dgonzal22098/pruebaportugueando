import { useEffect, useState } from "react";

const MetabaseEmbed = () => {


    const [iframeUrl, setIframeUrl] = useState("");

    useEffect(() => {
        fetch("http://localhost:3001/metabase-url")
            .then(res => res.json())
            .then(data => setIframeUrl(data.iframeUrl));
    }, []);

    return (
        <div style={{width: "100%", height: "600px"}}>
            {iframeUrl && (
                <iframe
                    src={iframeUrl}
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    allowTransparency="true"
                />
            )}
        </div>
    );
};

export default MetabaseEmbed;
