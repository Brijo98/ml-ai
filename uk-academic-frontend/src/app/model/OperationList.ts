export interface OperationList {
    id: number,
    user_id: number,
    type: string,
    is_processing_done: boolean,
    is_extraction_done: boolean,
    is_sentiment_performed: boolean,
    created_at: string,
    updated_at: string
}

export interface OperationMeta {
    total: number,
    per_page: number,
    current_page: number,
    last_page: number,
    first_page: number,
    first_page_url: string,
    last_page_url: string,
    next_page_url?: string,
    previous_page_url?: string
}