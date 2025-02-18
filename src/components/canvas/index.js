import { lazy } from "react";

const ComputersCanvas = lazy(() => import("./Computers"))
const StarsCanvas = lazy(() => import("./Stars"))
const EarthCanvas = lazy(()=> import("./Earth"))
const BallCanvas = lazy(() => import("./Ball"))
const AvatarCanvas = lazy(() => import("./Avatar"))

export { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas, AvatarCanvas };
