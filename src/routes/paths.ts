const paths = {
    root: "/",
    details: (id: string | number) => `/${id}`
} as const;

export default paths;
