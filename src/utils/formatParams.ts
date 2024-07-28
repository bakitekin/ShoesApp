interface UrlParams {
  size?: string;
  color?: string;
  gender?: string;
  price?: string;
}

function formatParams(urlParams: UrlParams): string {
  let apiString = "";

  for (const key in urlParams) {
    if (urlParams.hasOwnProperty(key) && urlParams[key]) {
      const values = urlParams[key]!.split(",");

      values.forEach((value) => {
        if (key === "size" || key === "color") {
          apiString += `${key}_like=${value}&`;
        } else if (key === "price") {
          apiString += `${key}_lte=${value}&`;
        } else {
          apiString += `${key}=${value}&`;
        }
      });
    }
  }

  // Remove any trailing '&' if it exists
  if (apiString.endsWith("&")) {
    apiString = apiString.slice(0, -1);
  }

  return apiString;
}

export default formatParams;
