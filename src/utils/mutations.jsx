import { gql } from "@apollo/client";

export const CONTACT_OBH = gql`
    mutation contactOBH(
        $firstname: String!,
        $lastname: String!,
        $email: String!,
        $phone: String,
        $message: String!
    ) {
        contactOBH(
            firstname: $firstname,
            lastname: $lastname,
            email: $email,
            phone: $phone,
            message: $message
        ) {
            id
            firstname
            lastname
            email
            phone
            message
        }
    }
`;
