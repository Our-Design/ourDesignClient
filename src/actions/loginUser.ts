"use server";
import { cookies } from "next/headers";

export const loginUser = async ({
  phone,
  password,
}: {
  phone: string;
  password: string;
}) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, password }),
      }
    );
    const respData = await res.json();
    // console.log({ respData });
    if (res.ok) {
      (await cookies()).set({
        name: "userId",
        value: respData.user._id,
      });
    }
    // if (!res.ok) {
    //   throw new Error(respData.errors[0].msg);
    // }

    // add cookies to the application here

    // const c = res.headers.getSetCookie();
    // const accessToken = c.find((cookie) => cookie.includes("accessToken"));
    const accessToken = respData.accessToken;
    if (!accessToken) {
      return {
        success: false,
        message: "No cookies were found!",
      };
    }
    // const parsedAccessToken = parse(accessToken);

    // if (!parsedAccessToken.accessToken || !parsedAccessToken.Expires) {
    //   throw new Error("Invalid cookie data");
    // }
    (await cookies()).set({
      name: "accessToken",
      value: accessToken,
      // value: parsedAccessToken.accessToken,
      // expires: new Date(parsedAccessToken.Expires),
    });
    return {
      success: true,
      message: respData?.message,
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to login User!",
    };
  }
};
