// optional and readonly example

type User = {
    readonly _id: string
    name: string
    email?: string
}

const user: User = {
    _id: "20210801105GMC3G",
    name: "Tanmay"
}

export {}