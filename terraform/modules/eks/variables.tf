variable "project_name" {
  description = "Project name"
  type        = string
}

variable "environment" {
  description = "Environment name"
  type        = string
}

variable "vpc_id" {
  description = "VPC ID"
  type        = string
}

variable "private_subnet_ids" {
  description = "Private subnet IDs for EKS"
  type        = list(string)
}

variable "cluster_version" {
  description = "EKS Kubernetes version"
  type        = string
  default     = "1.34"
}

variable "node_instance_type" {
  description = "EKS worker node instance type"
  type        = string
  default     = "t3.medium"
}

variable "desired_nodes" {
  description = "Desired worker node count"
  type        = number
  default     = 2
}

variable "min_nodes" {
  description = "Minimum worker node count"
  type        = number
  default     = 2
}

variable "max_nodes" {
  description = "Maximum worker node count"
  type        = number
  default     = 2
}
