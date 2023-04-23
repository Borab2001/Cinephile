import useBillboard from "@/hooks/useBillboard";
import React, { use } from "react";

const Billboard = () => {
    const { data } = useBillboard();
    return (
        <div className="relative h-[56.25vw]">
            <video autoPlay muted loop poster={data?.thumbnailUrl} src={data?.videoUrl}></video>
        </div>
    )
}

export default Billboard;