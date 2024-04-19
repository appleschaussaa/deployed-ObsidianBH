import { gql } from "@apollo/client";

export const QUERY_CONTACT = gql`
    query ContactOBH(
        $firstname: String!,
        $lastname: String!,
        $email: String!,
        $phone: String,
        $message: String!,
    ) {
        contactOBH(
            firstname: $firstname,
            lastname: $lastname,
            email: $email,
            phone: $phone,
            message: $message
        ) {
            firstname
            lastname
            email
            phone
            message
        }
    }
`;
export const READ_CONTACT_OBH = gql`
    query ReadContactOBH($id: ID!) {
        readContactOBH(id: $id) {
            id
            firstname
            lastname
            email
            phone
            message
        }
    }
`;
