-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT "ProductName", "CategoryName" 
FROM Product as p
JOIN Category as c
ON p."CategoryId" = c."Id";

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT O.ID, S.CompanyName
FROM "Order" as O
JOIN "Shipper" as S
ON O."ShipVia" = S."Id"
WHERE O."OrderDate" < "2012-08-09";

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT ProductName, Quantity
FROM Product as P
JOIN OrderDetail as OD
ON OD.ProductId = P.Id
WHERE OD.OrderId = 10251
ORDER BY ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT "Order"."Id", "Customer"."CompanyName", "Employee"."LastName"
FROM "Order"
JOIN "Customer" ON "Customer"."Id" = "Order"."CustomerId"
JOIN "Employee" ON "Employee"."Id" = "Order"."EmployeeId";