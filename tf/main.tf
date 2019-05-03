variable "aws_accesskey_id" {}
variable "aws_accesskey_secret" {}
variable "region" {
    default = "ap-northeast-1"
}

provider "aws" {
    access_key = "${var.aws_accesskey_id}"
    secret_key = "${var.aws_accesskey_secret}"
    region = "ap-northeast-1"
}

resource "aws_s3_bucket" "b" {
  bucket = "gotoubun"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

output s3_id {
  value = "${aws_s3_bucket.b.id}"
}
output s3_region {
  value = "${aws_s3_bucket.b.region}"
}
output s3_website_endpoint {
  value = "${aws_s3_bucket.b.website_endpoint}"
}
