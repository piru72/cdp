const reponseVerdicts = {
    INTERNAL_SERVER_ERROR: 'Internal Server Error',
    INVALID_ACADEMIC_SESSION: 'Invalid academic session',
    ERROR_UPDATING_ACADEMIC_SESSION: 'Error updating academic session',
    ACADEMIC_SESSION_NOT_FOUND: 'Academic session not found!',
    ACADEMIC_SESSION_FOUND: 'Academic session found!',
    EVENT_NOT_FOUND: 'Event not found!',
    EVENT_FOUND: 'Event found!',
    TRANSACTION_UPDATED_SUCCESSFULLY: 'Transaction updated successfully!',
}

const responeSummary = {
    UPDATE_ACADEMIC_SESSION: 'Update academic session',
    DETAILS_OF_A_SPECIFIC_ACADEMIC_SESSION: 'Details of a specific academic session',
    ADD_AN_EVENT: 'Add an event to the system',
    DETAILS_OF_A_SPECIFIC_EVENT: 'Details of a specific event',
    LIST_OF_ALL_PANEL_MEMBERS: 'List of all panel members',
    LIST_OF_ALL_PANEL_MEMBERS_BALANCE: 'List of all panel members balance',
    LIST_OF_ALL_POSITIONS: 'List of all positions',
    DETAILS_OF_A_SPECIFIC_PANEL_MEMBER: 'Details of a specific panel member',
    VALIDATION_FAILED: 'Validation failed',
    ADD_A_TRANSACTION: 'Add a transaction to the system',
    LIST_OF_ALL_TRANSACTION: 'List of all transactions in the system',
    UPDATE_A_TRANSACTION: 'Update a transaction of the system',
    LIST_OF_ALL_TRANSACTION_OF_A_USER: 'List of all transaction of a user',
}


module.exports = { reponseVerdicts, responeSummary };