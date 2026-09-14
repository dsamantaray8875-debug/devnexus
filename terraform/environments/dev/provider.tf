provider "aws" {
  region = "us-east-1"

  default_tags {
    tags = {
      Project     = "DevNexus"
      Environment = "dev"
      ManagedBy   = "Terraform"
      Practice    = "DevNexus"
    }
  }
}
