# Assuming that the ZONE of your domain is already registrated to your AWS account (Route 53)
# https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/AboutHZWorkingWith.html

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

# Main region where the resources should be created in
# Should be close to the location of your viewers
provider "aws" {
  region = "us-east-1"
}

# Provider used for creating the Lambda@Edge function which must be deployed
# to us-east-1 region (Should not be changed)
provider "aws" {
  alias  = "global_region"
  region = "us-east-1"
}

locals {
  # Your custom domain
  custom_domain = "www.clockwork.app"
}

# Get the hosted zone for the custom domain
data "aws_route53_zone" "custom_domain_zone" {
  name = "clockwork.app."
}

# Create a free SSL certificate for CloudFront distribution
# For more options (e.g. multiple domains) see:
# https://registry.terraform.io/modules/terraform-aws-modules/acm/aws/
# module "cloudfront_cert" {
#   source  = "terraform-aws-modules/acm/aws"
#   version = "~> v2.0"

#   domain_name = local.custom_domain
#   zone_id     = data.aws_route53_zone.custom_domain_zone.zone_id

#   tags = {
#     Name = "CloudFront ${local.custom_domain}"
#   }

#   # CloudFront works only with certs stored in us-east-1
#   providers = {
#     aws = aws.global_region
#   }
# }

module "tf_next" {
  source = "dealmore/next-js/aws"
  version = "0.8.1"
  deployment_name = "www-clockwork-app"

  # You can also attach multiple domains here since it accepts an array
  # Keep in mind that `domain_names` & `domain_zone_names` should always
  # contain the same number of elements, because a domain uses the same index
  # to get the associated zone_id
  # e.g. domain_names[0] -> domain_zone_names[0]
  #      domain_names[1] -> domain_zone_names[1]
  #      etc.
  domain_names      = [local.custom_domain]
  domain_zone_names = [data.aws_route53_zone.custom_domain_zone.name]

  # Tell CloudFront to use our created certificate
  cloudfront_viewer_certificate_arn = "arn:aws:acm:us-east-1:613429685354:certificate/fff6731f-119f-4c99-8e2a-0cc6355924da"

  cloudfront_price_class = "PriceClass_All"

  providers = {
    aws.global_region = aws.global_region
  }
}

output "cloudfront_domain_name" {
  value = module.tf_next.cloudfront_domain_name
}

output "custom_domain_name" {
  value = local.custom_domain
}