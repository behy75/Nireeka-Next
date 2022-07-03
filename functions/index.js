import React from "react";

export function commafy(num) {
  num.toString().replace(/\B(?=(?:\d{3})+)$/g, ",");
}
