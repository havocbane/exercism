Public Class Allergies
    Public Enum AllergyScoresEnum As Integer
        Eggs = 1
        Peanuts = 2
        Shellfish = 4
        Strawberries = 8
        Tomatoes = 16
        Chocolate = 32
        Pollen = 64
        Cats = 128
    End Enum

    Private allergies As New List(Of String)

    Public Sub New(score As Integer)
        Dim allergyScore = score Mod 256
        If allergyScore = 0 Then
            Return
        End If
        Dim allergyValues = [Enum].GetValues(GetType(AllergyScoresEnum))
        Array.Reverse(allergyValues)
        For Each allergyValue In allergyValues
            If (allergyScore - allergyValue) >= 0 Then
                allergies.Add([Enum].GetName(GetType(AllergyScoresEnum), allergyValue).ToString().ToLower())
                allergyScore -= allergyValue
            End If
        Next
        Me.allergies.Reverse()
    End Sub

    Public Function AllergicTo(allergy As String) As Boolean
        Return allergies.Contains(allergy)
    End Function

    Public Function List() As IList(Of String)
        Return Me.allergies
    End Function
End Class
