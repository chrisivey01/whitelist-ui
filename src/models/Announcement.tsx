export interface Announcement {
    text: string;
    show: boolean;
    edit: boolean;
    thumbsUp: UpvoteDownvote;
    thumbsDown: UpvoteDownvote;
}

export interface Announcements {
    announcements: Announcement[];
}

interface UpvoteDownvote {
    count: number;
    people: string[];
}
