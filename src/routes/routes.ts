import { Router } from "express";
import routesDashboard from "./dashboard"

const route  =  Router()

route.use("/dashboard", routesDashboard)

export default route