import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
    
    export default function Mint() {
        return (
            <CrossmintPayButton
                collectionId="884be88f-7f7b-45b8-be6f-69128e11cb3c"
                projectId="c09eb65f-0d93-476b-aff2-d5b15301aac9"
                mintConfig={{"type":"erc-721","totalPrice":"1","_amount":"1"}}
environment="staging"

            />
        );
    }