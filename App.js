import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';

export default function App() {
  const [visibleSection, setVisibleSection] = useState(null);

  const renderSection = (section) => {
    switch (section) {
      case 'Resumo':
        return (
          <View style={styles.section}>
            <Text style={styles.title}>Resumo Profissional</Text>
            <Text style={styles.text}>
              Supervisor em prestadoras de serviço da Motorola e LG, com mais de 4 anos de trajetória bem-sucedida em liderar equipes, colaborar
              com departamentos técnicos e assegurar a excelência operacional. Fornecendo suporte, orientação e feedback contínuos para alcançar
              metas de qualidade e produtividade. Comprovada capacidade de monitorar métricas de desempenho, identificar áreas de melhoria e
              implementar ações corretivas para otimizar processos e aumentar a satisfação do cliente.
            </Text>
          </View>
        );
      case 'Experiências':
        return (
          <View style={styles.section}>
            <Text style={styles.title}>Experiências Profissionais</Text>
            <Text style={styles.subtitle}>Supervisor Administrativo - Softcell - Terceirizada Motorola</Text>
            <Text style={styles.text}>06/2019 - 09/2023</Text>
            <Text style={styles.text}>
              Liderança de uma equipe de 10 colaboradores, garantindo uma comunicação eficaz, motivação e alto desempenho. Colaboração ativa
              com a equipe técnica para garantir a sincronização entre os departamentos e alcançar objetivos interdisciplinares. Fornecimento de
              orientação prática e feedback contínuo aos membros da equipe, resultando em melhorias na qualidade e produtividade. Monitoramento
              constante de métricas de desempenho, como tempo médio de reparo, taxa de resolução de problemas e satisfação do cliente.
              Identificação de tendências e padrões através da análise de dados, levando à implementação de estratégias proativas para aprimorar a
              eficiência operacional. Iniciativas de treinamento conjunto a Motorola para manter a equipe atualizada sobre as melhores práticas,
              procedimentos e regulamentações relevantes. Colaboração com a gerência para desenvolver e implementar planos de ação corretiva,
              resultando em melhorias significativas.
            </Text>
            <Text style={styles.subtitle}>Supervisor Operacional - Uzicell - Terceirizada LG</Text>
            <Text style={styles.text}>03/2017 - 06/2019</Text>
            <Text style={styles.text}>
              Desenvolvimento e execução de estratégias para otimizar a produtividade, resultando em um aumento na eficiência operacional. Supervisão
              das operações diárias, assegurando o cumprimento dos padrões de qualidade e prazos estabelecidos. Coordenação de projetos
              multifuncionais, promovendo a colaboração entre diferentes equipes e garantindo a entrega bem-sucedida dentro do prazo. Implementação
              de um sistema de monitoramento de desempenho, levando a uma redução no tempo médio de reparo e a um aumento na taxa de resolução
              de problemas. Realização de avaliações de desempenho regulares, identificando pontos fortes e áreas de desenvolvimento da equipe, e
              fornecendo treinamento personalizado. Vãs nos processos e resultados.
            </Text>
          </View>
        );
      case 'Formação':
        return (
          <View style={styles.section}>
            <Text style={styles.title}>Formação</Text>
            <Text style={styles.subtitle}>Faculdade Senac</Text>
            <Text style={styles.text}>Conclusão Prevista: 2025</Text>
            <Text style={styles.text}>Carga Horária: 2100h/a</Text>
            <Text style={styles.subtitle}>Refrigeração e Climatização</Text>
            <Text style={styles.text}>Conclusão: 2020-2021</Text>
            <Text style={styles.text}>Carga Horária: 160 horas</Text>
          </View>
        );
      case 'Certificações':
        return (
          <View style={styles.section}>
            <Text style={styles.title}>Certificações</Text>
            <Text style={styles.text}>Curso de Python – Fundação Bradesco – Concluído em 2022</Text>
            <Text style={styles.text}>Especialização em conserto de celular – Sandro Cell – Concluído 2017</Text>
            <Text style={styles.text}>Curso de manutenção de celulares LG e POSITIVO EAD – Concluído em 2018</Text>
            <Text style={styles.text}>Curso de Inglês – Senac – Elementary – 2022 - cursando</Text>
            <Text style={styles.text}>Curso Word e Excel - Portal do Saber- EAD- 2017</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
       
        <Text style={styles.negrito}>Lincon Matheus Gomes Da Silva</Text>
        <Text>Endereço: Rua Dragão Do Mar N˚172-Brasilia Teimosa - Recife-PE</Text>
        <Text>Telefone: (81)99710-1305</Text>
        <Text>Email: linconmatheuslm2012@gmail.com</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://br.linkedin.com/in/lincon-matheus-78a5ba164')}>
          <Text style={styles.link}>LinkedIn: Lincon Matheus</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/LinconMatheus26')}>
          <Text style={styles.link}>GitHub: LinconMatheus26</Text>
        </TouchableOpacity>
        <Text>Idade: 25 anos</Text>
      </View>

      <View style={styles.line} />

      <TouchableOpacity onPress={() => setVisibleSection('Resumo')}>
        <Text style={styles.sectionHeader}>Resumo Profissional</Text>
      </TouchableOpacity>
      {visibleSection === 'Resumo' && renderSection('Resumo')}

      <View style={styles.line} />

      <TouchableOpacity onPress={() => setVisibleSection('Experiências')}>
        <Text style={styles.sectionHeader}>Experiências Profissionais</Text>
      </TouchableOpacity>
      {visibleSection === 'Experiências' && renderSection('Experiências')}

      <View style={styles.line} />

      <TouchableOpacity onPress={() => setVisibleSection('Formação')}>
        <Text style={styles.sectionHeader}>Formação</Text>
      </TouchableOpacity>
      {visibleSection === 'Formação' && renderSection('Formação')}

      <View style={styles.line} />

      <TouchableOpacity onPress={() => setVisibleSection('Certificações')}>
        <Text style={styles.sectionHeader}>Certificações</Text>
      </TouchableOpacity>
      {visibleSection === 'Certificações' && renderSection('Certificações')}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  negrito: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
    marginBottom: 5,
  },
  line: {
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
    color: 'blue',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});
