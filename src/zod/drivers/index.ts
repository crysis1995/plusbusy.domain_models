import z from "zod"

const DriverBasic = z.object({
    Id:z.number(),
    Name:z.string(),
    Surname:z.string(),
})

const Driver = z.object({
    Phone:z.string().optional(),
    Email:z.string().email().optional(),
    IsPhoneConfirmed:z.boolean(),
    IsEmailConfirmed:z.boolean(),
    CreatedAt:z.date(),
    UpdatedAt:z.date(),
}).merge(DriverBasic)


export{DriverBasic,Driver}