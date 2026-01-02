# 🚀 Hosting a Static Website on AWS EC2
## 1️⃣ Launch EC2 Instance

**Region:** your choice  
**AMI:** Amazon Linux 2 (Free Tier eligible)  
**Instance type:** t2.micro  
**Security Group:** Allow ports 22 (SSH), 80 (HTTP)  

## 2️⃣ Connect to Instance
```
ssh -i your-key.pem ec2-user@your-ec2-public-ip
```

## 3️⃣ Update System
```
sudo yum update -y
```

## 4️⃣ Install HTTPD
```
sudo yum install -y httpd
```

## 5️⃣ Start & Enable HTTPD
```
sudo systemctl start httpd
sudo systemctl enable httpd
```

## 6️⃣ Copy Your Website Files
(Replace your-website with your folder name)
```
sudo rm -rf /var/www/html/*
sudo cp -r /home/ec2-user/your-website/* /var/www/html/
```

## 7️⃣ Open in Browser
`http://your-ec2-public-ip`
