import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
    import { useAddress } from "@thirdweb-dev/react";
    export default function Mint() {
        const address = useAddress();
                return (
            <CrossmintPayButton
                collectionId="1889cb62-1152-4278-ba53-53db518ff854"
                projectId="c09eb65f-0d93-476b-aff2-d5b15301aac9"
                mintConfig={{"type":"erc-721","totalPrice":"0.125","_amount":"1","quantity":"1"}}
environment="staging"
mintTo=""
            />
        );
    }